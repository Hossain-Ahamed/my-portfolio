
const Projects = () => {
    return (
        <>
            <section id="projects"
                className="mb-16 "
                aria-label="Selected projects">
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
                        Projects</h2>
                </div>
                <div>
                    <ul className="group/list">
                        <li className="mb-12">
                            <div
                                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div
                                    className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                                </div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3><a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                        href="https://v4.brittanychiang.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="brittanychiang.com (v4) (opens in a new tab)">
                                        <span>brittanychiang.com <span className="inline-block">(v4)<svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentcolor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clipRule="evenodd">
                                            </path>
                                        </svg></span></span></a></h3>
                                    <p className="mt-2 text-sm leading-normal">An old
                                        portfolio site built with Gatsby with 6k+
                                        stars and 3k+ forks</p>
                                    <ul className="mt-2 flex flex-wrap"
                                        aria-label="Technologies used:">
                                        <li className="mr-1.5 mt-2">
                                            <div
                                                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                Gatsby
                                            </div>
                                        </li>
                                        <li className="mr-1.5 mt-2">
                                            <div
                                                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                Styled Components
                                            </div>
                                        </li>
                                        <li className="mr-1.5 mt-2">
                                            <div
                                                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                Netlify
                                            </div>
                                        </li>
                                    </ul>
                                </div><img alt="brittanychiang.com version 4 hero section"
                                    loading="lazy"
                                    width="200"
                                    height="48"
                                    decoding="async"
                                    data-nimg="1"
                                    className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                   
                                    srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x"
                                    src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75" />
                            </div>
                        </li>
                    </ul>
                   
                </div>
            </section>
        </>
    );
};

export default Projects;