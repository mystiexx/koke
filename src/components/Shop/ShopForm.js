import React, { useState } from 'react';
import './Shop.css';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Input,
	Button,
	InputGroup,
	InputLeftAddon,
	useToast
} from '@chakra-ui/react';
import { createOrder } from '../../services/orders';

function ShopForm(props) {
	const toast = useToast();
	const admin = props.cart;
	const [ fullname, setFullName ] = useState('');
	const [ productName, setProductName ] = useState('');
	const [ size, setSize ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ color, setColor ] = useState('');
	const [ loading, setLoading ] = useState(false);
	console.log(admin);

	const Submit = async () => {
		setLoading(true);
		const obj = {
			fullname,
			productName,
			size,
			phone,
			color
		};
		try {
			let { data } = await createOrder(obj);
			if (data) {
				toast({
					title: 'Done.',
					description: 'You will contacted shortly',
					status: 'success',
					duration: 9000,
					isClosable: true,
					position: 'top-right'
				});
				window.location.href= '/shop'
			}
		} catch (err) {
			toast({
				title: 'Failed',
				description: err.message,
				status: 'error',
				duration: 9000,
				isClosable: true,
				position: 'top-right'
			});
		}
	};
	return (
		<div>
			<Modal isOpen={props.isOpen} onClose={props.Close}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader style={{ background: '#0b0c10', color: '#fff' }}>
						Order
						<ModalCloseButton onClick={props.Close} style={{ color: '#fff' }} />
					</ModalHeader>

					<ModalBody>
						<InputGroup className="mt-3">
							<InputLeftAddon
								children="Full Name"
								style={{
									font: 'normal normal normal 15px/20px Lato',
									color: '#1F2833'
								}}
							/>
							<Input
								type="text"
								variant="filled"
								onChange={(e) => setFullName(e.target.value)}
							/>
						</InputGroup>

						<InputGroup className="mt-3">
							<InputLeftAddon
								children="Name"
								style={{
									font: 'normal normal normal 15px/20px Lato',
									color: '#1F2833'
								}}
							/>
							<Input
								type="text"
								variant="filled"
								onChange={(e) => setProductName(e.target.value)}
								value={admin.productName}
							/>
						</InputGroup>

						<InputGroup className="mt-3">
							<InputLeftAddon
								children="Sizes"
								style={{
									font: 'normal normal normal 15px/20px Lato',
									color: '#1F2833'
								}}
							/>
							<Input
								type="text"
								variant="filled"
								placeholder={admin.sizes}
								onChange={(e) => setSize(e.target.value)}
							/>
						</InputGroup>

						<InputGroup className="mt-3">
							<InputLeftAddon
								children="Colors"
								style={{
									font: 'normal normal normal 15px/20px Lato',
									color: '#1F2833'
								}}
							/>
							<Input
								type="text"
								variant="filled"
								placeholder={admin.colors}
								onChange={(e) => setColor(e.target.value)}
							/>
						</InputGroup>

						<InputGroup className="mt-3">
							<InputLeftAddon
								children="Phone Number"
								style={{
									font: 'normal normal normal 15px/20px Lato',
									color: '#1F2833'
								}}
							/>
							<Input
								type="text"
								variant="filled"
								onChange={(e) => setPhone(e.target.value)}
							/>
						</InputGroup>
					</ModalBody>

					<ModalFooter>
						<Button
							onClick={Submit}
							disabled={loading}
							isLoading={loading}
							style={{ background: '#1f2833', color: '#fff' }}
						>
							Order
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
}

export default ShopForm;
