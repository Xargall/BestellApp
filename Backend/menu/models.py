from django.db import models


# Create your models here.
class Mead(models.Model):
    class Category(models.TextChoices):
        BURGER = "burger", "Burger"
        PIZZA = "pizza", "Pizza"
        SALAD = "salad", "Salad"

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=10, choices=Category.choices)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField()
    image_filename = models.CharField(max_length=100)

    def __str__(self):
        return self.name
