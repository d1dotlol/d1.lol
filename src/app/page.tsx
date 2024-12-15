import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Portfolio() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/d1dotlol" },
    { name: "YouTube", url: "https://www.youtube.com/@d1dotlol" },
    { name: "X", url: "https://x.com/d1dotlol" },
  ];

  const projects = [
    {
      name: "d1.lol",
      description: "Here",
      links: [{ url: "https:github.com/d1dotlol/d1.lol", text: "GitHub" }],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dan</h1>
          <p className="text-xl text-muted-foreground">(Dan1, D1)</p>
        </header>

        <nav className="mb-4">
          <ul className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                >
                  {link.name}
                </Link>
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
                      <Link
                        key={link.url}
                        href={link.url}
                      >
                        {link.text}
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
