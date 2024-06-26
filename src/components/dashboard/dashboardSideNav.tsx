import { Button } from "@nextui-org/react";

export default function DashboardSide() {
  return (
    <main className="flex flex-col h-full gap-4 p-4  ">
      {/* search and home */}
      <section className="flex flex-col gap-2 p-4 bg-secondary rounded-md">
        <h2 className="text-secondary-foreground">Rankify</h2>
        <Button>Home</Button>
        <Button>Search</Button>
      </section>
      {/* user playlists and stuff */}
      <section className="flex flex-col gap-2 p-4 bg-secondary rounded-md">
        <Button>Playlists</Button>
        <Button>Stations</Button>
        <Button>Artists</Button>
        <Button>Albums</Button>
        <Button>Tracks</Button>
      </section>
    </main>
  );
}
