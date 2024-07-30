import profileImg from '../../assets/images/profile.png'

const Header = () => {
    return (
        <>
        <div className='flex justify-between items-center mx-4 border-b-2'>
        <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        <img src={profileImg} alt="" srcset="" />
        
        </div>
       
            
        </>
    );
};

export default Header;