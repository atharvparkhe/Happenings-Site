import { FiArrowUpRight } from "react-icons/fi";

function Venue() {
    return (
        <>
        <div className="flex gap-12 flex-col md:flex-row items-center justify-center relative z-20" style={{background: 'linear-gradient(269.39deg, #430D0B -0.69%, #010D10 28.48%)'}}>
        <div className="font-satoshi text-center md:text-left mr-5">
            <div className="mb-10">
            <div className={"text-white font-mangogrotesque text-7xl font-bold mb-8 md:ml-8"}>
                VENUE 
            </div>
            <div className="font-merriweather leading-relaxed flex items-center text-base font-normal max-w-xs text-white m-10">
            Lorem ipsum dolor sit amet consectetur. Enim in arcu nec id non ornare aliquam convallis. Enim fames eget blandit quam integer tortor. Eget aenean sit ultricies sit in urna porttitor. Tortor aliquam diam natoque sollicitudin amet vitae ac sem nisi. Nec dolor dapibus sit semper amet fermentum volutpat placerat. Porttitor quis nibh neque pellentesque. Pharetra vestibulum consectetur faucibus at malesuada aliquam placerat platea duis. Neque nibh viverra amet libero facilisi augue.
            </div>
            </div>
        </div>  

        <div className="grid place-items-center p-4">        
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.122373779684!2d73.96642201484825!3d15.261120889384564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb39d51852b17%3A0xa706b3fadb014ec0!2sManohar%20Parrikar%20Indoor%20Stadium!5e0!3m2!1sen!2sin!4v1683036376012!5m2!1sen!2sin"
                    alt="Manohar Parrikar Indoor Stadium"
                    className="max-w-[100vw] xl:w-[500px] xl:h-[300px] w-[350px] h-[200px] md:w-[350px] md:h-[350px] xmd:w-[400px] avg:h-[20rem] xsm:h-[300px] sm:ml-0 mr-[2%] md:mr-0 rounded-mid border-custom-red border-2"
                />
            </div>    
        </div>

        <div className=" text-white "> 
        {/* put the bg */}
            <div className="text-white pb-20">
                <div className="w-11/12 md:w-[60vw] mx-auto pt-8">                    
                    <div className='mx-auto mt-8'>                                                
                    <div className="border-orange-500 border-2 border-dotted rounded-tl-3xl rounded-br-3xl py-3 mx-auto w-5/6 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-lg">
                        <h3 className='text-3xl md:text-5xl text-center text-orange-600 uppercase' style={{ 'fontFamily': 'MangoGrotesque' }}>Registration</h3>                                    
                        <div className="text-center">
                        Join in and register your college for the biggest college fests in Goa!
                        </div>
                        <div className="mt-4 flex justify-center">
                        <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center uppercase" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit">Register Now <FiArrowUpRight size={20} /></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Venue;