import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Anthony Pham",
    location: "Irvine, CA",
    tagline: "I'm a FullStack Developer",
    email: "apham.dev@gmail.com",
    availability: "Open for work",
    brand:
      "With my expertise in web application development and proficiency in programming languages such as Python and JavaScript, I approach each project with a deep understanding of the end user's perspective. I am skilled in all stages of the development cycle, and strive to design and build highly effective user-centered digital products that bridge the gap between developers and end users.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
