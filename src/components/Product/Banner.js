export default function Banner() {
  return (
    <div className="flex flex-col shrink-0 box-border justify-center items-center bg-[rgba(155,155,155,0.3)] p-[20px]">
      <div className="flex flex-col max-w-[860px] justify-start items-start">
        <div className="max-w-[860px] text-[rgba(45,45,45,1)] text-3xl font-bold md:text-[64px] leading-[120.00000476837158%] tracking-[-0.5px] text-center mx-auto">
          <p>Shopify Products</p>
        </div>
        <div className="max-w-[860px] text-[rgba(43,43,43,1)] text-[24px] tracking-[0px] text-center mt-[8px]">
          Integrating Shopify Products By fetching data from Builder.io
        </div>
      </div>
      <div className="flex flex-col max-w-[444px] mt-[24px]">
        <div className="gap-[20px] flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch leading-[normal] w-full max-md:w-full">
            <div className="flex flex-col max-w-[210px] justify-center items-center rounded-[8px]">
              <div className="flex flex-row max-w-[343px] justify-center items-center bg-black px-[20px] py-[16px]">
                <a
                  href="..."
                  className="max-w-[89px] justify-center items-center text-white text-[18px] leading-[24px] tracking-[0px] text-center"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
