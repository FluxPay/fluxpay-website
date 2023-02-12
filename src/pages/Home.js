import logo from "../images/logo.png"
import who1 from "../images/who-1.jpg"
import who2 from "../images/who-2.jpg"
import superfluid from "../images/superfluid.svg"
import push from "../images/push.svg"
import polygon from "../images/polygon.svg"
import mantle from "../images/mantle.svg"
import arcana from "../images/arcana.png"
import quicknode from "../images/quicknode.svg"
import polywrap from "../images/polywrap.jpg"

export default function Home() {
  return (
    <div className="font-dm">
      <section className="w-full min-h-screen mx-auto px-12 flex flex-col justify-center items-center relative">
        <img className="w-48 h-48 m-4 animate-spin-slow" src={logo} alt="logo" />
        <h1 className="text-center text-5xl font-bold my-4">FluxPay</h1>
        <p className="text-fgreen font-bold text-xl">Simplify your DAO payroll management with Superfluid</p>
        <div className="w-[0.5px] h-24 mx-auto border-2 border-gray-500 mt-8 absolute bottom-0"></div>
      </section>
      <div className="w-[0.5px] h-24 mx-auto border-2 border-gray-500"></div>
      <section className="w-full mx-auto p-12 flex flex-col justify-center items-center relative">
        <h2 className="text-center text-4xl font-bold my-4">Who is this for ?</h2>
        <div className="flex justify-center items-center my-8">
          <div className="w-48 h-48 rounded-[50%] overflow-hidden mx-4">
            <img className="h-full object-cover" src={who1} alt="who this is for"/>
          </div>
          <p className="max-w-[35%] mx-4">Superfluid is ideal for any organization, team or group of contributors that rely on blockchain technology for payment processing. It is especially well-suited for decentralized autonomous organizations (DAOs) that need to efficiently and securely manage payroll, without the complexity and overhead costs associated with traditional payroll processes.</p>
        </div>
        <div className="flex justify-center items-center my-8">
          <p className="max-w-[35%] mx-4">Superfluid is also useful for individuals who want to get paid in real-time for their contributions, without the delay and fees associated with traditional payment methods. Overall, Superfluid is designed to simplify the payroll management process for anyone using blockchain technology for compensation.</p>
          <div className="w-48 h-48 rounded-[50%] overflow-hidden mx-4">
            <img className="h-full object-cover" src={who2} alt="who this is for"/>
          </div>
        </div>
        <div className="w-[0.5px] h-24 mx-auto border-2 border-gray-500 mt-8 absolute bottom-0"></div>
      </section>
      <div className="w-[0.5px] h-24 mx-auto border-2 border-gray-500"></div>
      <section className="w-full mx-auto p-12 flex flex-col justify-center items-center relative">
        <h2 className="text-center text-4xl font-bold my-4">Reasons to use FluxPay</h2>
        <div className="w-1/2 bg-fgreen px-8 py-4 my-8 rounded-lg text-white shadow-xl">
          <div className="w-full flex justify-between my-4 mb-4">
            <div className="w-[48%] hover:bg-white hover:text-black p-4 rounded-md">
              <h3 className="font-bold text-lg">Streamline payroll management</h3>
              <p>Superfluid simplifies the process of managing payroll for DAOs, teams, and contributors by enabling users to set a yearly (or monthly) amount to transfer and then moving the funds over time without the need for any further transactions on-chain.</p>
            </div>
            <div className="w-[48%] hover:bg-white hover:text-black p-4 rounded-md">
              <h3 className="font-bold text-lg">Reduce overhead costs</h3>
              <p>By only having to set the amount of funds to transfer once, rather than every month, Superfluid eliminates the need for monthly administrative and payroll transactions from complicated cold wallets, reducing overhead costs.</p>
            </div>
          </div>
          <div className="w-full flex justify-between my-4 mt-4">
            <div className="w-[48%] hover:bg-white hover:text-black p-4 rounded-md">
              <h3 className="font-bold text-lg">Pay in real-time</h3>
              <p>Superfluid enables contributors to get paid in real-time, allowing them to use the funds as soon as they receive them.</p>
            </div>
            <div className="w-[48%] hover:bg-white hover:text-black p-4 rounded-md">
              <h3 className="font-bold text-lg">Directly stream to multiple wallets</h3>
              <p>Superfluid allows users to stream tokens to as many wallets as they want directly from a Gnosis Safe, making it easy to pay everyone without needing to manage multiple accounts.</p>
            </div>
          </div>
        </div>
        <div className="w-[0.5px] h-8 mx-auto border-2 border-gray-500 mt-8 absolute bottom-0"></div>
      </section>
      <div className="w-[0.5px] h-24 mx-auto border-2 border-gray-500"></div>
      <section className="w-full mx-auto p-12 flex flex-col justify-center items-center relative">
        <h2 className="text-center text-4xl font-bold my-4">Built Using</h2>
        <div className="flex items-center justify-evenly my-16 w-4/5 flex-wrap">
          <img className="mx-8 my-4 w-36" src={superfluid} alt="superfluid"/>
          <img className="mx-8 my-4 w-36 bg-black" src={push} alt="superfluid"/>
          <img className="mx-8 my-4 w-36" src={polygon} alt="superfluid"/>
          <img className="mx-8 my-4 w-36 bg-black" src={mantle} alt="superfluid"/>
          <img className="mx-8 my-4 w-36 bg-black" src={arcana} alt="superfluid"/>
          <img className="mx-8 my-4 w-36" src={quicknode} alt="superfluid"/>
          <img className="mx-8 my-4 w-36 bg-black" src={polywrap} alt="superfluid"/>
        </div>
        <div className="w-[0.5px] h-16 mx-auto border-2 border-gray-500 mt-8 absolute bottom-0"></div>
      </section>
      <div className="w-[0.5px] h-24 mx-auto border-2 border-gray-500"></div>
      <section className="w-full mx-auto p-12 flex flex-col justify-center items-center relative">
        <h2 className="text-center text-4xl font-bold my-4">Future scope and features</h2>
        <div className="w-1/2 my-8 flex flex-col">
          <div className="w-4/5 bg-fgreen text-white border-2 border-white hover:bg-white hover:text-fgreen hover:border-fgreen p-4 rounded-md self-start my-4">
            <p>Enable users to set up different payment schedules for different contributors, allowing for more flexibility and customization.</p>
          </div>
          <div className="w-4/5 bg-fgreen text-white border-2 border-white hover:bg-white hover:text-fgreen hover:border-fgreen p-4 rounded-md self-end my-4">
            <p>Explore the use of smart contracts to automate payroll management, making the process even more efficient and reducing the potential for errors.</p>
          </div>
          <div className="w-4/5 bg-fgreen text-white border-2 border-white hover:bg-white hover:text-fgreen hover:border-fgreen p-4 rounded-md self-start my-4">
            <p>Integrate with other blockchain-based applications, such as time-tracking software or task management tools, to offer a more seamless experience for users.</p>
          </div>
          <div className="w-4/5 bg-fgreen text-white border-2 border-white hover:bg-white hover:text-fgreen hover:border-fgreen p-4 rounded-md self-end my-4">
            <p>Developing a user-friendly interface that is easy to navigate and understand, making it accessible to a wider range of users.</p>
          </div>
        </div>
        <div className="w-[0.5px] h-16 mx-auto border-2 border-gray-500 mt-8 absolute bottom-0"></div>
      </section>
      <div className="w-[0.5px] h-24 mx-auto border-2 border-gray-500"></div>
      <div className="mx-auto w-1/4 p-8 flex items-center justify-center">
        <img className="w-8" src={logo} alt="logo"/>
        <p className="text-center mx-4 text-lg">FluxPay</p>
      </div>
    </div>
  )
}
