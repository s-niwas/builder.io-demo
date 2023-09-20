export default function ProductCard({ product }) {
  const { image, slug, amount, title, id } = product;

  return (
    product && (
      <li key={id}>
        <div className="flex mx-10 md:mx-0 flex-col shrink-0 box-border h-auto bg-neutral-100 cursor-pointer pointer-events-auto gap-[16px] p-[5%] rounded-[8px] max-md:mb-[24px]">
          <img
            src={image}
            loading="lazy"
            className="aspect-[1] object-contain object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden"
          />
          <div className="flex flex-col shrink-0 box-border gap-[8px]">
            <a
              href={slug}
              className="shrink-0 box-border leading-[normal] h-auto max-md:text-[24px]"
            >
              {title}&nbsp;
            </a>
            <div className="flex flex-row shrink-0 box-border gap-[4px] max-md:text-[24px]">
              <a className="shrink-0 box-border leading-[normal] h-auto">Rs.</a>
              <a className="shrink-0 box-border leading-[normal] h-auto">
                {amount}
              </a>
            </div>
          </div>
        </div>
      </li>
    )
  );
}

//   href={`shop/${handle}`}


// export default function ProductCard({ product }) {
//   const { images, handle, variants, title, id } = product;

//   return (
//     product && (
//       <li key={id}>
//         <div
         
//           className="flex mx-10 md:mx-0 flex-col shrink-0 box-border h-auto bg-neutral-100 cursor-pointer pointer-events-auto gap-[16px] p-[5%] rounded-[8px] max-md:mb-[24px]"
//         >
//           <img
//             src={images[0]?.src}
//             loading="lazy"
//             className="aspect-[1] object-contain object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden"
//           />
//           <div className="flex flex-col shrink-0 box-border gap-[8px]">
//             <a className="shrink-0 box-border leading-[normal] h-auto max-md:text-[24px]">
//               {title}&nbsp;
//             </a>
//             <div className="flex flex-row shrink-0 box-border gap-[4px] max-md:text-[24px]">
//               <a className="shrink-0 box-border leading-[normal] h-auto">Rs.</a>
//               <a className="shrink-0 box-border leading-[normal] h-auto">
//                 {variants[0].price.amount}
//               </a>
//             </div>
//           </div>
//         </div>
//       </li>
//     )
//   );
// }

 //   href={`shop/${handle}`}