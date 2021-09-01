import * as S from'./style';
import Link from 'next/link';

const Header = () => {
    return(
        <S.Header>
            <S.Links>
             <Link href='/'><a style={{margin:'10px'}}>Home </a></Link> 
             <Link href='/about'><a style={{margin:'10px'}}>About </a></Link>          
            </S.Links>
        </S.Header>
    )
}
export default Header