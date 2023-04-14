package com.mihaisuciu.ecommerce.dao;

import com.mihaisuciu.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
