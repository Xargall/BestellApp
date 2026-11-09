from rest_framework import generics
from .models import Meal
from .serializer import MealSerializer


class MealListView(generics.ListAPIView):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer
