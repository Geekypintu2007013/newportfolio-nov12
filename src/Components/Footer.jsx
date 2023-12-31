import React from "react";
import { Link } from "react-scroll";

function Footer() {
	return (
		<footer className="bg-gray-200  h-full	  dark:bg-gray-800">
			<div className="w-[95%] md:w-full mx-auto max-w-screen-xl p-2 sm:flex sm:items-center sm:justify-between">
				<Link
					className="flex items-center cursor-pointer"
					activeClass="active"
					to="#"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<span className="self-center text-2xl font-normal whitespace-nowrap text-gray-500">
						devpintukumar
					</span>{" "}
				</Link>
				<ul className="flex  items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
					<li>
						<Link
							className="mr-4 hover:underline md:mr-6 cursor-pointer"
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className="mr-4 hover:underline md:mr-6 cursor-pointer"
							activeClass="active"
							to="blog"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Blogs
						</Link>
					</li>
					<li>
						<Link
							className="mr-4 hover:underline md:mr-6 cursor-pointer"
							activeClass="active"
							to="projects"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Project
						</Link>
					</li>
					<li>
						<Link
							className="mr-4 hover:underline md:mr-6 cursor-pointer"
							activeClass="active"
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
