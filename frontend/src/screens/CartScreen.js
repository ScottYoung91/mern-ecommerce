import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { addToCard } from '../actions/cartActions';

const CartScreen = () => {
	const params = useParams();
	const productId = params.id;
	const location = useLocation();

	const quantity = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	useEffect(() => {
		if (productId) {
			dispatch(addToCard(productId, quantity));
		}
	}, [dispatch, productId, quantity]);
	return <div>CartScreen</div>;
};

export default CartScreen;
