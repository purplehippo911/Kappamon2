export default function Header() {
    return (
        <header className='text-white bg-kappa-green h-[100vh] ps-0 pe-1'>
            <div class="container flex flex-col">
                <nav className="flex w-full p-10">
                    <a href="#">
                        <img src="icons/logo.png"/>
                    </a>
                    
                    <ul className="flex ml-[auto] gap-10">
                        <li>
                            <a href="text-sm font-thin">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="text-sm font-thin">
                                Kappadex
                            </a>
                        </li>
                        <li>
                            <a href="text-sm font-thin">
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>

                <section className="flex flex-col items-center">
                    <h1 className="text-[10rem] font-bold">Yokard</h1>
                    
                    <picture className="grid w-1/2 bg-white rounded-full mb-5">
                        <img
                            src='/kawaii_kappa.png'
                            alt='A kawaii kappa yokai as our mascot'
                            className=""
                        />
                        
                        {/* <img
                            src="/Ellipse.png"
                            alt="A circle"
                            className="z-index-[0]"
                        /> */}
                        
                    </picture>
                    
                    <p className="text-[1.5rem]">The tabletop game straight from Japan</p>
                </section>
            </div>
    </header>

    )
}