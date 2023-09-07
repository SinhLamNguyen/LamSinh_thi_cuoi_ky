package com.example.Final_Test.services;

import com.example.Final_Test.entities.Product;
import com.example.Final_Test.models.ProductStatus;
import com.example.Final_Test.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    @Autowired
    public ProductService(ProductRepository repository) {
        this.productRepository = repository;
    }
    public List<Product> findAll() {
        return productRepository.findAll().stream()
                .filter(product -> product.isCancel()==false)
                .collect(Collectors.toList());
    }
//    public Optional<Product> findById(Long id) {
//        return repository.findById(id);
//    }
    public Product getProductById(Long id) {
        Optional<Product> optional = productRepository.findById(id);
        return optional.orElse(null);
    }
    public Product getProductByName(String name) {
        return productRepository.findByName(name);
    }
    public Product insert (Product product) {
        product.setCreatedDate(LocalDateTime.now());
        return productRepository.save(product);
    }
    public Product update (Product product) {
        Optional<Product> optional = productRepository.findById(product.getId());
        if (optional.isPresent()) {
            return productRepository.save(product);
        }
        return null;
    }
    public Product delete (Long id) {
        Optional<Product> optional = productRepository.findById(id);
        if (optional.isPresent()) {
            Product foundProduct = optional.get();
            if (foundProduct.isActive() == true || foundProduct.isInactive() == true) {
                foundProduct.setStatus(ProductStatus.PRODUCT_CANCEL);
            }
            return productRepository.save(foundProduct);
        }
        return null;
    }

}
