import Moln from '@/assets/moln.svg'

const Page1 = () => {
    return (<>
        <h1>PAGE 1</h1>
        <button onClick={() => { throw new Error() }}>Oil</button>
        <Moln color={'red'} height={100} width={100} />
    </>
    )
}

export default Page1;