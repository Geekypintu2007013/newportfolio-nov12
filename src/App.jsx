import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
// import Blogs from "./Sections/Blogs";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<div className="bg-gray-100 dark:bg-gray-900   ">
				<Hero></Hero>
				<About></About>
				{/* <Blogs></Blogs> */}
				<Projects></Projects>
				<Contact></Contact>
			</div>
			<Footer></Footer>
		</>
	);
}

export default App;
