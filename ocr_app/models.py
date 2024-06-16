from django.db import models

# Create your models here.
class image_data(models.Model):
    data = models.TextField(max_length=500)

    def __str__(self) -> str:
        return self.data[0:10]

