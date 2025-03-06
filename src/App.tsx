import { HeroGeometric } from "./components/ui/shape-landing-hero";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <HeroGeometric
        badge="Yakovliam Engineering"
        title1="Secure. Build."
        title2="Grow."
        description="Yakovliam delivers cutting-edge software, security, and strategy—built for the future."
      />
    </div>
  );
}

export default App;
