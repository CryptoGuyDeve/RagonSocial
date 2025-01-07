'use client'
import { useState, useEffect } from "react";
import { getUserByUsername } from "@/actions/user.action"; // Ensure this function exists in your actions file
import { getPosts } from "@/actions/post.action"; // Add this function in your actions to fetch posts
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]); // State for users
  const [posts, setPosts] = useState<any[]>([]); // State for posts
  const [loading, setLoading] = useState(false);

  // Function to handle searching for users
  const searchUsers = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const users = await getUserByUsername(query); // Fetch users by search query
      setSearchResults(users);
    } catch (error) {
      console.error("Error searching users", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch posts based on search query
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const fetchedPosts = await getPosts(); // Fetch posts from your backend
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };

  // Call fetchPosts on page load
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to filter posts based on query
  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(query.toLowerCase()) || 
    post.author.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex space-x-6">
        {/* Left Section: Posts */}
        <div className="w-2/3">
          <div className="mb-4">
            <form onSubmit={searchUsers} className="w-full">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                placeholder="Search for users or posts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" className="mt-2 w-full" variant="default" disabled={loading}>
                {loading ? "Searching..." : "Search"}
              </Button>
            </form>
          </div>

          {/* Posts Section */}
          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post: any) => (
                <Card key={post.id} className="mb-4">
                  <CardHeader>
                    <Avatar>
                      <AvatarImage src={post.author.image} alt={post.author.name} />
                    </Avatar>
                    <div className="ml-4">
                      <CardTitle>{post.author.name}</CardTitle>
                      <Link href={`/user/${post.author.username}`} className="text-sm text-gray-500">@{post.author.username}</Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{post.content}</p>
                    {post.image && <img src={post.image} alt="Post image" className="w-full mt-4" />}
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>No posts found</p>
            )}
          </div>
        </div>

        {/* Right Section: Users */}
        <div className="w-1/3">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Users</h2>
            {searchResults.length > 0 ? (
              searchResults.map((user) => (
                <Card key={user.id}>
                  <CardHeader>
                    <Avatar>
                      <AvatarImage src={user.image} alt={user.name} />
                    </Avatar>
                    <div className="ml-4">
                      <CardTitle>{user.name}</CardTitle>
                      <Link href={`/user/${user.username}`} className="text-sm text-gray-500">@{user.username}</Link>
                    </div>
                  </CardHeader>
                </Card>
              ))
            ) : (
              <p>No users found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
