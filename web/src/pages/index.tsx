import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

export default function Home() {
  return (
    <div className='max-w-[1124] h-screen mx-auto grid grid-cols-2 items-center'>
      <main>
        <Image src={logoImg} alt='NLW Copa'/>

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExampleImg} alt=''/>
          <strong>
            <span>12.592</span>  pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder='Qual o nome do seu bolão?'/>
          <button type='submit'>Criar meu bolão</button>
          <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
        </form>
        <div>
          <div>
            <Image src={iconCheckImg} alt='marca de certo'/>
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={iconCheckImg} alt='marca de certo'/>
            <span>+192.847</span>
            <span>Palpites enviados</span>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt='Dois celulares exibindo uma prévia da aplicação do nlw' quality="100"/>

      </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()

//   console.log(data)

//   return {
//     props: {
//       count: data.count,
//     }
//   }
// }