import {Header} from '../components/Header';

function Layout({ children }){
	return (
		<div className="Layout">
			<Header />
			{children}
		</div>
	);
}

export  {Layout};