import { Dashboard, Header, LeftSidebar, Main, RightSidebar } from "@/components";

export default function Home() {
  return (
    <>
      <Header title={"Dashboard"} />
      <Main>
        <LeftSidebar />
        <Dashboard />
        <RightSidebar />
      </Main>
    </>
  );
}
