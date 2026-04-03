import { ProfileHeader } from "@/components/profile-header";
import { LinkList } from "@/components/link-list";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-12 sm:py-16">
      <div className="flex w-full max-w-md flex-col items-center gap-8">
        <ProfileHeader />
        <LinkList />
        <Footer className="-mt-6" />
      </div>
    </main>
  );
}
