import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JSX } from "react";

export default function Portfolio() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/d1dotlol" },
    { name: "YouTube", url: "https://www.youtube.com/@d1dotlol" },
    { name: "X", url: "https://x.com/d1dotlol" },
    { name: "Twitch", url: "https://twitch.tv/d1dotlol" },
  ];

  const projects = [
    {
      name: "d1.lol",
      description: "this website",
      links: [
        { url: "https://www.github.com/d1dotlol/d1.lol", text: "GitHub" },
      ],
    },
  ];

  function socialIcon(social: string): JSX.Element {
    const source = `https://cdn.simpleicons.org/${social}/gray`
    const size = "16"
    return (
      <img height={size} width={size} src={source} />
    );
  }

  return (
    <div className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dan</h1>
          <p className="text-xl text-muted-foreground">(Dan1, D1)</p>
        </header>
        <nav className="text-center mb-4">
          <ul className="flex justify-evenly">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.url}>{socialIcon(link.name)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <main>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Links</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.name}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.description}</TableCell>
                  <TableCell>
                    {project.links.map((link) => (
                      <Link key={link.url} href={link.url}>
                        {socialIcon(link.text)}
                      </Link>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </div>
    </div>
  );
}
