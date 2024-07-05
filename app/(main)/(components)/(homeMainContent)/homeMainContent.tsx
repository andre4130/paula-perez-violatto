export default function HomeMainContent() {
  return (
    <div className="flex flex-col justify-between px-5 md:pt-12">
      <div className={`animate-moveAndFade duration-1000 flex justify-end text-justify md:text-right`}>
        <div className="w-100 md:w-[50%] text-2xl md:text-4xl ">
          FEM Calcul is an engineering consultancy built on more than 10 years of experience on computer-aided
          structural analysis covering a broad range of engineering challenges.
        </div>
      </div>
      <div className={`max-w-2xl animate-moveAndFade duration-1000 mt-8 mb-3 md:py-0 md:text-left`}>
        <div className="text-2xl md:text-4xl">
          It is a company that offers services related with advanced nonlinear finite element analysis of civil
          engineering structures in different sectors such as, bridges, tunnels, energy, historical buildings, etc.
        </div>
      </div>
    </div>
  );
}
