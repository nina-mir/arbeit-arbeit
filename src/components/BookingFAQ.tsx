import looking_at_view from '../assets/images/looking_at_view.jpg'
import SmoothImage from './SmoothImage'




function BookingFAQ() {

  const heading = "text-2xl font-semibold text-stone-700 mt-5 mb-3"
  const paragraph = "text-[1.2rem] md:w-[50%]  w-[80%]"

    //  text-[1.3rem] flex flex-col gap-3 justify-center"

  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Booking a Session (FAQ)</h1>


      <SmoothImage
        src={looking_at_view}
        alt="erica brooks in a mesh outfit with blurred private parts and face looking hot and super eager"
        className="rounded-xl"
        caption={'"Mostly tits and ass."'}
      />

        <h2 className={heading}>Terms of Engagement</h2>
        <p className={paragraph}>
          Reading and respecting my boundaries ensures a better experience for both of us.✨
          When I feel safe, I can relax and enjoy our time together—disregarding my limits
          only creates tension.
          I'd much rather focus on making you smile than enforcing policies. Sound good?😸
        </p>

        <h2 className={heading} >What is screening?</h2>
        <p className={paragraph}>Screening is for my safety and information is kept 100% confidential.
          I prioritise my safety and well-being. Screening can be: a LinkedIn,
          an active/updated Instagram, or a partially blocked out ID
          (only name and photo need to be visible). The latter is the preferred method.
          If you choose to use social media as screening, there may be additional requirements
          (at my discretion).
        </p>

        <h2 className={heading}>How do I pay the donation?
        </h2>
        <p className={paragraph}>
          Donations should be placed in an unsealed envelope or card and set on
          the table at the beginning of our date. If meeting publicly, discreetly
          place my donation in a gift bag or book.
        </p>

        <h2 className={heading}>Are you passport ready?</h2>

        <p className={paragraph}>Yes! I've travelled to over 20 countries so far and absolutely
          love my fmty experiences.
        </p>


    </div>
  )
}
export default BookingFAQ