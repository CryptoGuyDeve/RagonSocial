'use client'
import { useState } from "react";
import { getUserByUsername } from "@/actions/user.action"; // Make sure to create this function in your actions
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Function to handle searching for users
  const searchUsers = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const users = await getUserByUsername(query); // Fetch users by the search query
      setSearchResults(users);
    } catch (error) {
      console.error("Error searching users", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-center mb-6">
        <form onSubmit={searchUsers} className="w-full max-w-md">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            placeholder="Search for users..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" className="mt-2 w-full" variant="default" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </Button>
        </form>
      </div>

      <div className="space-y-4">
        {searchResults.length === 0 ? (
          <p className="text-center">No users found.</p>
        ) : (
          searchResults.map((user) => (
            <Card key={user.id}>
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Link href={`/profile/${user.username}`}>
                    <Avatar>
                      <AvatarImage src={user.image ?? "/avatar.png"} />
                    </Avatar>
                  </Link>
                  <div className="text-sm">
                    <Link href={`/profile/${user.username}`} className="font-medium">
                      @{user.username}
                    </Link>
                    <p className="text-muted-foreground">{user._count.followers} followers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
