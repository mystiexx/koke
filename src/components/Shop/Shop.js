import React, { useState, useEffect } from 'react';
import './Shop.css';
import { getProducts } from '../../services/shop';
import { Spinner, Box, Image, Button } from '@chakra-ui/react';
import { Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import ShopForm from './ShopForm'

function Shop() {
	const [ shop, setShop ] = useState([]);
	const [ loading, setLoading ] = useState(true);
    const [ cart, setCart ] = useState({})
	const [ open, setOpen ] = useState(false);

	const Products = async () => {
		try {
			let { data } = await getProducts();
			setShop(data.products);
			setLoading(false);
		} catch (err) {}
	};

    const openModal = (val) => {
		setCart(val)
		setOpen(true)
	}


	useEffect(() => {
		Products();
	}, []);
	return (
		<div>
			{loading ? (
				<div className="text-center" style={{ marginTop: 100 }}>
					<Spinner size="xl" style={{ color: '#1B2F5E' }} />
				</div>
			) : (
				<div>
					<div className="header pb-4">
						<div className="head">
							<h2 className="header-text ">Shop</h2>
						</div>
					</div>
                    <ShopForm cart={cart} isOpen={open} Close={() => setOpen(false)}/>

					<Row className="p-4">
						{shop.map((data, i) => {
							return (
								<Col md={3}>
									<Box
										maxW="sm"
										borderWidth="1px"
										borderRadius="lg"
										overflow="hidden"
										style={{
											background: 'white'
										}}
									>
										{data.images.slice(0, 1).map((data, i) => {
											return <Image src={data} />;
										})}
										<Box
											style={{
												font: 'normal normal bold 20px/25px Lato',
												color: '#1f2833',
												textTransform: 'capitalize'
											}}
											className="mt-3 ml-4"
										>
											{data.productName}
										</Box>

										<Box className="mt-2 ml-4">
											<NumberFormat
												value={data.price}
												displayType={'text'}
												thousandSeparator={true}
												prefix={'₦'}
												style={{
													font: 'normal normal bold 18px/20px Lato',
													color: '#1f2833'
												}}
											/>
										</Box>
										<Box className="mt-2 ml-4 mb-3">
											<Button
                                            onClick={() => openModal(data)}
												style={{ background: '#1f2833', color: '#fff' }}
											>
												Buy
											</Button>
										</Box>
									</Box>
								</Col>
							);
						})}
					</Row>
				</div>
			)}
		</div>
	);
}

export default Shop;
