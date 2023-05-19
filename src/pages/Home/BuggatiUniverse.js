import 'bootstrap/dist/css/bootstrap.min.css';
import lifestyle from './../../assests/lifestyle.jpg';
import FABP from './../../assests/FABP.jpg';
const BuggatiUniverse = () => {
    return (
        <section className='buggatiuniverse'>
            <div className='container py-4 justify-content-center'>
               
               
                        <header><h2>BUGATTI UNIVERSE</h2></header>
                        <div className=' row py-2 d-flex justify-content-center'>
                            <div className='col-4 lifestyile buggatiuniversebg '>
                                <div >
                                    <p className='buggativersertxt'>LIFESTYLE</p>
                                </div>
                            </div>
                            <div className='  col-4 FABP  buggatiuniversebg '>
                                <div >
                                    <p className='buggativersertxt'>FIND A BUGGATI PARTNER</p>
                                </div> </div>
                            <div className='col-4 carrer   buggatiuniversebg '>
                                <div >
                                    <p className='buggativersertxt'>CAREER</p>
                                </div>
                            </div>


                        </div>
                    </div>
                
            
        </section>
    )
};
export default BuggatiUniverse;