package com.mihaisuciu.ecommerce.service;

import com.mihaisuciu.ecommerce.dto.Purchase;
import com.mihaisuciu.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
