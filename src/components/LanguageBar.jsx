import { Button } from 'react-bootstrap'

const LanguageBar = () => {
    return (
        <div className='language-bar'>
            <Button className='lng-btn ml-3'><div className='mt-n1'>Español</div></Button>
            <Button className='lng-btn'><div className='mt-n1'>Português</div></Button>
            <Button className='lng-btn mr-3'><div className='mt-n1'>Italiano</div></Button>
        </div>
    )
}

export default LanguageBar