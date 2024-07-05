import AboutShortcut from './(components)/(aboutShortcut)/aboutShortcut';
import HomeMainContent from './(components)/(homeMainContent)/homeMainContent';
import ServicesOffered from './(components)/(ServicesOffered)/servicesOffered';

export default function Home() {
  return (
    <>
      <main
        className="flex min-h-[calc(100vh-72px)] pt-[40px] md:pt-[72px] bg-[url('../public/images/bridge.jpg')] opacity-70
      bg-cover bg-center bg-fixed flex-col items-center justify-between p-3 md:p-4"
      >
        <div className="flex min-h-[70vh] max-w-[1460px]">
          <HomeMainContent />
        </div>
      </main>
      <section>
        <ServicesOffered />
        <AboutShortcut />
      </section>
    </>
  );
}
