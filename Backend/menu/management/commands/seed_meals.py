from django.core.management.base import BaseCommand
from menu.models import Meal

BURGERS = [
    {
        "name": "Veggie mushroom black burger",
        "price": 16.90,
        "description": "Mixed green salad, Tomatoes, Edamame, Mushrooms",
        "image_filename": "001.jpg",
    },
    {
        "name": "All meat burger",
        "price": 15.90,
        "description": "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ sauce",
        "image_filename": "002.jpg",
    },
    {
        "name": "Beef red burger",
        "price": 14.90,
        "description": "Beef, Cheese, Tomatoes, Lettuce, Onion",
        "image_filename": "003.jpg",
    },
    {
        "name": "Big chicken burger",
        "price": 15.90,
        "description": "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell Pepper",
        "image_filename": "004.jpg",
    },
]

PIZZAS = [
    {
        "name": "Pizza Margherita",
        "price": 11.90,
        "description": "Tomato Sauce, Mozzarella",
        "image_filename": "001.jpg",
    },
    {
        "name": "Chorizo",
        "price": 13.90,
        "description": "Tomato Slices, Mozzarella, Chorizo",
        "image_filename": "002.jpg",
    },
    {
        "name": "Pizza Funghi",
        "price": 12.90,
        "description": "Red onion, Button Mushrooms, Mozzarella",
        "image_filename": "003.jpg",
    },
    {
        "name": "Quattro Formaggi with Chicken",
        "price": 15.90,
        "description": "Chicken, mozzarella, Gorgonzola, Fontina, Parmeggiano Reggiano",
        "image_filename": "004.jpg",
    },
]

SALADS = [
    {
        "name": "Warm beef arugula salad",
        "price": 16.90,
        "description": "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried tomatoes, Balsamic-Vinegar dressing",
        "image_filename": "001.jpg",
    },
    {
        "name": "Mini green salad",
        "price": 7.90,
        "description": "Green salad, Cucumber, Carrots, Parsley, Radishes",
        "image_filename": "002.jpg",
    },
    {
        "name": "Green salad with sea food",
        "price": 16.90,
        "description": "Mixed green, Cherry tomatoes, Red onion, Mussles, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill",
        "image_filename": "003.jpg",
    },
    {
        "name": "Vegan green salad with tofu",
        "price": 14.90,
        "description": "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts",
        "image_filename": "004.jpg",
    },
]


class Command(BaseCommand):
    help = "Seedet die Meal-Tabelle mit den ursprünglichen db.js-Daten"

    def handle(self, *args, **options):
        Meal.objects.all().delete()

        for data in BURGERS:
            Meal.objects.create(category=Meal.Category.BURGER, **data)
        for data in PIZZAS:
            Meal.objects.create(category=Meal.Category.PIZZA, **data)
        for data in SALADS:
            Meal.objects.create(category=Meal.Category.SALAD, **data)

        self.stdout.write(self.style.SUCCESS(f"{Meal.objects.count()} Meals angelegt."))
