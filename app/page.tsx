'use client';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const prompts = [
  {
    title: "Blog Article Generator",
    category: "Writing",
    prompt: "Write a detailed blog post about {{topic}} in a friendly and informative tone."
  },
  {
    title: "Instagram Caption Creator",
    category: "Social Media",
    prompt: "Create a witty and engaging Instagram caption about {{subject}}."
  },
  {
    title: "SEO Product Description",
    category: "E-Commerce",
    prompt: "Write an SEO-optimized product description for {{product_name}} that highlights its benefits."
  }
];

export default function Home() {
  const [search, setSearch] = useState('');

  const filteredPrompts = prompts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Prompt copied!');
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Prompt Gallery</h1>
      <Input
        placeholder="Search prompts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPrompts.map((p, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <h2 className="font-semibold text-lg mb-2">{p.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{p.category}</p>
              <pre className="bg-muted p-2 rounded text-sm whitespace-pre-wrap mb-4">{p.prompt}</pre>
              <Button onClick={() => handleCopy(p.prompt)}>Copy Prompt</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
