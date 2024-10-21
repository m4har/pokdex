import { getPokemonList } from "../services/api";
import { Banner, Header, LangSwitch, MainContent } from "./_components";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const offset = Number(searchParams?.offset ?? 0) || 0;
  const limit = Number(searchParams?.limit ?? 9) || 9;
  const pokeList = await getPokemonList(offset, limit);
  return (
    <div className="bg-[#F7F8F8]">
      <LangSwitch />
      <Header />
      <Banner />
      <MainContent
        data={pokeList.data ?? []}
        total={pokeList.count ?? 0}
        offset={offset}
        limit={limit}
      />
    </div>
  );
}
