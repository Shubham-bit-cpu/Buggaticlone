import 'bootstrap/dist/css/bootstrap.min.css';
import newimage from '../../assests/news.jpg'

const news = () => {
    return (
        <section className='news'>
            <div className='container'>
                
                    
                        <header>
                            <h2>NEWS</h2>
                        </header>
                       
                            <div className='row'>
                                <div className='col-6 py-4'>
                                <img src={newimage} className="newsbg"></img>
                                </div>
                                <div className='col-4'>
                                    <p className="MOLSHEIM">MOLSHEIM, 09 JANUARY 2023</p>
                                    <h5 className="MOLSHEIMheading">2022 – THE BEST YEAR IN BUGATTI’S MODERN HISTORY</h5>
                                    <div className=' d-flex justify-content-start mx-4'>
                                        <span className='topressrelease'>TO PRESS RELEASE</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="60" fill="currentColor" class="bi bi-arrow-right rightarrow" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        
                    
                </div>
            
        </section>
    )
};
export default news;

