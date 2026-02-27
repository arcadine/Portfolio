import './professional.css';
import Container from 'react-bootstrap/Container';
import logos from '../../assets/triple logos all black pale lav background.jpg';
import contrast from '../../assets/color contrast.jpg';
import responsive from '../../assets/responsive design.jpg';
import unique from '../../assets/unique solutions.jpg';
import consistency from '../../assets/consistency.jpg';
import productpg from '../../assets/professional pages/product page.jpg';
import leadgenpg from '../../assets/professional pages/lead gen page.jpg';
import resourcepg from '../../assets/professional pages/customer resources page.jpg';
import blogpost from '../../assets/professional pages/blog post.jpg';


const Professional = () => {
  return (
    <div className="d-flex flex-column">
        {/* hero section */}
        <Container fluid className="hero-sec d-flex flex-column justify-content-center align-items-center" id="profHero">
            <div className="hero-txt-sec d-flex flex-column align-items-center">
                <h1>Professional Work</h1>
            </div>
        </Container>

        {/* professional work intro section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec top-sec">
            <div>
                <h2>My Experience</h2>
            </div>

            <div className="d-flex page-sec-inner align-items-center">
            
                <div className="text-sec">
                    <p>
                        I spent over 5 years as the sole front end web developer for Haverford Systems, Inc. (HSI) where I primarily worked on maintaining and updating their biggest brand website (<a href="https://ptzoptics.com" target="_blank">PTZOptics</a>) as well as the sites for their other brands (<a href="https://haverford.com" target="_blank">Haverford Systems Integration</a> and <a href="https://huddlecamhd.com" target="_blank">HuddleCamHD</a>) using WordPress and page builder tools like Elementor. In my time at Haverford, I carried out a multitude of changes aimed at streamlining  and improving the user experience. Below are some examples of my work at HSI, along with some of the design considerations I bring to every project.
                    </p>
                </div>

                <div className="img-sec">
                    <img src={logos} alt="PTZOptics, HuddleCamHD, and Haverford Systems logos in all black stacked vertically" className="side-pic"/>
                </div>

            </div>
        </Container>

        {/* Pages I've Created section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec">
            <div className="d-flex flex-column page-sec-inner align-items-center">
                <div className="prof-subh">
                    <h2>Pages I've Created</h2>
                </div>
                <p style={{textAlign: "center", marginBottom: "20px"}}>
                    These are some examples of the types of pages I created while at HSI, primarily designed by me and built with Elementor. All HSI sites used custom themes built in collaboration with <a href="https://silverwoodstudiosonline.com/" target="_blank">Silverwood Studios</a>, and maintained/modified by me.
                </p>
            </div>
            <div className="d-flex justify-content-center align-items-center card-sec">
                <div className="d-flex flex-column card">
                    <div className="d-flex flex-column justify-content-center align-items-center card-full">
                        <img src={productpg} alt="Screen capture of the upper third of the producer bundles page on PTZOptics.com." className="card-pic-2"/>
                        <h3>Product Page</h3>
                        <p className="card-txt">
                            This is a page promoting the PTZOptics Producer Bundles. These types of pages presented product imagery, technical specifications, pricing, documentation, and more in an organized and digestible fashion.
                        </p>
                        <a href="https://ptzoptics.com/producer-bundles/" target="_blank" className="card-btn">View Full Page</a>
                    </div>
                </div>

                <div className="d-flex flex-column card">
                    <div className="d-flex flex-column justify-content-center align-items-center card-full">
                        <img src={blogpost} alt="Screen capture of the upper third of a blog post on PTZOptics.com." className="card-pic-2"/>
                        <h3>Blog Post</h3>
                        <p className="card-txt">
                            This is a quarterly newsletter posted to the PTZOptics blog. These posts delivered the latest updates on PTZOptics products, live events, upcoming trade shows, and wider industry trends. 
                        </p>
                        <a href="https://ptzoptics.com/ptzoptics-insider-2/" target="_blank" className="card-btn">View Full Page</a>
                    </div>
                </div>

                <div className="d-flex flex-column card">
                    <div className="d-flex flex-column justify-content-center align-items-center card-full">
                        <img src={leadgenpg} alt="Screen capture of the industrial solutions page on Haverford.com." className="card-pic-2"/>
                        <h3>Lead Generation Page</h3>
                        <p className="card-txt">
                            This is an industrial solutions page for the Haverford Systems Integration site. These types of pages demonstrate how HSI's services can serve specific markets, and generate leads for the sales team.
                        </p>
                        <a href="https://haverford.com/industrial/" target="_blank" className="card-btn">View Full Page</a>
                    </div>
                </div>

                <div className="d-flex flex-column card">
                    <div className="d-flex flex-column justify-content-center align-items-center card-full">
                        <img src={resourcepg} alt="Screen capture of the firmware resources page on PTZOptics.com." className="card-pic-2"/>
                        <h3>Customer Resources Page</h3>
                        <p className="card-txt">
                            This page provides all the resources a customer could need for updating their PTZOptics product's firmware. These customer resource pages act as a centralized hub for various categories of assets.
                        </p>
                        <a href="https://ptzoptics.com/firmware/" target="_blank" className="card-btn">View Full Page</a>
                    </div>
                </div>
            </div>
        </Container>

        {/* Accessibility section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec">
            <div className="prof-subh">
                    <h2>Design Considerations</h2>
            </div>
            <div className="d-flex page-sec-inner align-items-center">
                <div className="text-sec">
                    <h3 className="prof-subh">
                        Accessibility
                    </h3>
                    <p>
                        All developers should keep accessibility top of mind during the design process. Beyond simple adherence to international standards and legal requirements (e.g. WCAG, ADA, etc.), designing accessible websites that include tweaks like alt text for images, semantic HTML, and <a href="https://dequeuniversity.com/color-contrast" target="_blank">ensuring sufficient foreground and background color contrast</a> greatly improves the user experience, site performance, and SEO. By making websites accessible for people with disabilities, we create a superior end product for all visitors. 
                    </p>
                </div>

                <div className="img-sec">
                    <img src={contrast} alt="A screenshot of a section of the PTZOptics homepage showing how it meets WCAG color contrast standards." className="side-pic"/>
                </div>

            </div>
        </Container>

        {/* Responsive Design section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec">
            <div className="d-flex page-sec-inner align-items-center">
            
                <div className="text-sec">
                    <h3 className="prof-subh">
                        Responsive Design
                    </h3>
                    <p>
                        It's no secret that more and more users are now primarily using their smartphones to visit websites. This has logically led to the advent of mobile-first design, where websites are built with mobile viewports in mind and media queries are added to the site CSS with desktop adjustments, rather than the other way around. However, not all sites are visited equally. Using tools like Google Analytics can reveal what medium your specific audience uses to access your site - I've had to use a desktop-first design approach when analytics revealed our site visitors were over 80% desktop users, while still making sure the mobile experience was seamless.
                    </p>
                </div>

                <div className="img-sec">
                    <img src={responsive} alt="PTZOptics homepage responsive web design on desktop, laptop, tablet, and mobile devices." className="side-pic"/>
                </div>

            </div>
        </Container>

        {/* Unique Solutions section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec">
            <div className="d-flex page-sec-inner align-items-center">
            
                <div className="text-sec">
                    <h3 className="prof-subh">
                        Unique Solutions to Unique Problems
                    </h3>
                    <p>
                        Web development and design are, ultimately, exercises in problem solving. There's no one-size-fits-all solution; what works for one project might not work for another. Every page must be tailored towards specific desired outcomes, whether it's <a href="https://haverford.com/industrial/" target="_blank">lead generation</a>, <a href="https://ptzoptics.com/producer-bundles/" target="_blank">product promotion</a>, or <a href="https://ptzoptics.com/ptzoptics-insider-2/" target="_blank">content delivery</a>. Pre-built themes and templates are fine starting points, but they're solutions to other people's problems. As part of my design and development process, I make sure to take into account what we are trying to accomplish on a specific page, while maintaining consistency and a strong user experience across the site.
                    </p>
                </div>

                <div className="img-sec">
                    <img src={unique} alt="PTZOptics, HuddleCamHD, and Haverford Systems logos in all black stacked vertically" className="side-pic"/>
                </div>

            </div>
        </Container>

        {/* Consistency section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec ">
            <div className="d-flex page-sec-inner align-items-center bottom-sec">
            
                <div className="text-sec">
                    <h3 className="prof-subh">
                        Consistency
                    </h3>
                    <p>
                        The importance of maintaining visual consistency across a website can't be understated. Adhering to a brand guide not only helps streamline the design process by taking certain design decisions off my plate, but it helps create a smooth user journey across all webpages that keeps your brand's identity at the forefront. Using a similar page structure for related pages (such as for <a href="https://ptzoptics.com/case-studies/" target="_blank">solutions</a>, <a href="https://ptzoptics.com/products/" target="_blank">products</a>, or <a href="https://ptzoptics.com/resources/" target="_blank">customer resources</a>) also makes development time more efficient by allowing you to reuse modules and keep your code DRY.
                    </p>
                </div>

                <div className="img-sec">
                    <img src={consistency} alt="Diagonally stacked screenshots of three resource pages from PTZOptics showing similar hero banners and body sections." className="side-pic"/>
                </div>

            </div>
        </Container>
    </div>
  )
}

export default Professional