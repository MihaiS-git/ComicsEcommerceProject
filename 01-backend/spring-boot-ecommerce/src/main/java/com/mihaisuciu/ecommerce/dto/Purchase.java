package com.mihaisuciu.ecommerce.dto;

import com.mihaisuciu.ecommerce.entity.Address;
import com.mihaisuciu.ecommerce.entity.Customer;
import com.mihaisuciu.ecommerce.entity.Order;
import com.mihaisuciu.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
