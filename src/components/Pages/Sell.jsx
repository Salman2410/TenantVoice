import React from "react";
import img1 from '../../assets/Scene.png';
import img2 from '../../assets/shot.png';
import img3 from '../../assets/spot.png';
import img4 from '../../assets/my-home.png';
import img5 from '../../assets/Large_Browsing_Location.png';
import img6 from '../../assets/A_Nice_House_.png';
import img7 from '../../assets/Domain_News_circle.png';



const Sell = () => {
  return (
    <>
      <section className="w-[80%] mx-auto my-20 flex ">
        <div className="pr-14">
          <span className="text-[32px] text-[#131212] font-semibold">
            Connect with
          </span>
          <p className="my-5 text-[64px] text-[#131212] font-semibold leading-tight">
            1 million people who don't
            <br /> visit our nearest
            <br /> competitor1
          </p>
          <h3 className="text-[32px] text-[#131212] font-semibold">
            Reach people looking to buy, not browse.
          </h3>
        </div>

        <div className="pl-14">
          <img className="w-[300px] h-[300px]" src={img1} alt="image" />
        </div>
      </section>

      <section className="bg-[#F8F6F1] my-28 py-20">
        <h2 className="text-center text-[28px] text-[#131212] ">
          Why do sellers choose TenantVoice?
        </h2>
        <div className="my-14">
          <div className="flex justify-center items-center gap-20 mb-14">
            <div className="flex justify-center items-center">
              <div>
                <img className="w-[180px] h-[180px]" src={img2} alt="image" />
              </div>
              <div>
                <h3 className="text-[18px] text-[#131212] ">
                  Buyers not browsers
                </h3>
                <p className="text-[18px] text-[#524C47] my-3">
                  Over 500,000 are looking to buy in the <br /> next 12 months.
                </p>
                <span className="text-[12px] text-[#7C7C7B]">
                  Survey period October 2022 – September 2023
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <img className="w-[180px] h-[180px]" src={img5} alt="image" />
              </div>
              <div>
                <h3 className="text-[18px] text-[#131212] ">
                  1 million people on TenantVoice <br />don't visit our nearest
                  competitor
                </h3>
                <p className="text-[18px] text-[#524C47] my-3">
                  Reach 1 million local, regional <br /> and interstate people on
                  tenantvoice <br />who don't visit our nearest <br />competitor on
                  average each month1.
                </p>
                <span className="text-[12px] text-[#7C7C7B]">
                  Survey period October 2022 – September 2023
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-20">
            <div className="flex justify-center items-center">
              <div>
                <img className="w-[180px] h-[180px]" src={img6} alt="image" />
              </div>
              <div>
                <h3 className="text-[18px] text-[#131212] ">
                  Sellers trust TenantVoice
                </h3>
                <p className="text-[18px] text-[#524C47] my-3">
                  Since 2019, over 5.2 million Australian <br /> homes have been
                  sold on TenantVoice.
                </p>
                <span className="text-[12px] text-[#7C7C7B]">
                  Survey period October 2022 – September 2023
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <img className="w-[180px] h-[180px]" src={img7} alt="image" />
              </div>
              <div>
                <h3 className="text-[18px] text-[#131212] ">
                  Reach professionals
                </h3>
                <p className="text-[18px] text-[#524C47] my-3">
                  1.3 million managers or <br />
                  professionals are on TenantVoice.
                </p>
                <span className="text-[12px] text-[#7C7C7B]">
                  Survey period October 2022 – September 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#FDFCFB] my-10">
        <h2 className="text-[28px] text-[#131212] text-center">
          Speak to your agent about listing on Domain today!
        </h2>
        <h3 className="text-[24px] text-[#131212] text-center">
          Don’t have an agent? We can help.
        </h3>
        <div className="flex justify-center items-center gap-12 w-[80%] mx-auto my-10">
          <div className="flex justify-center items-center p-[24px] bg-white shadow-lg">
            <div>
              <img className="w-[120px] h-[120px]" src={img3} alt="image" />
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#131212]">
                Find an agent
              </h3>
              <p className="text-[18px] text-[#524C47]">
                Don't do it alone-start your selling <br /> journey with someone
                you can trust
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-[24px] bg-white shadow-lg">
            <div>
              <img className="w-[120px] h-[120px]" src={img3} alt="image" />
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#131212]">
                Get an appraisal
              </h3>
              <p className="text-[18px] text-[#524C47]">
                Find out how much your home is worth <br /> by requesting an
                appraisal from a local expert
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-[80%] mx-auto my-[100px]">
        <div className="my-auto">
          <h2 className="text-[28px] text-[#131212] font-semibold mb-2">
            Domain for Owners
          </h2>
          <p className="text-[18px] text-[#131212] font-normal">
            Track interest in your property. Add your property to your Domain
            account, <br /> to follow current demand and local activity.
          </p>
        </div>
        <div>
          <img className="w-[596px] h-[501px]" src={img4} alt="my-home" />
        </div>
      </section>
    </>
  );
};

export default Sell;
