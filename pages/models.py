# pages/models.py
from django.conf import settings
from django.db import models

# Create your models here.
class Installation(models.Model):
    name = models.CharField(verbose_name="Name of the Owncload installation.", max_length=30)
    number_of_users = models.IntegerField(verbose_name="Number of users.")
    number_of_terabytes = models.DecimalField(verbose_name="Size of provided storage by installation.", decimal_places=2, max_digits=20, default=0)
    lat_coordinates = models.DecimalField(verbose_name="Latitude for Location", max_digits=10, decimal_places=8, default=0)
    lon_coordinates = models.DecimalField(verbose_name="Longitude for Location", max_digits=11, decimal_places=8, default=0)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,null=True, blank=True,on_delete=models.SET_NULL)
    # TODO logo implementation
    # logo = models.ImageField("Image to be displayed on Map Note", upload_to='uploads/')
    created = models.DateTimeField(verbose_name="Create Date",auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    deleted = models.BooleanField(verbose_name="If the entry has been deleted. Default False.", default=False)
    url = models.URLField(verbose_name="URL to university or to find more information on installation.", blank=True)

    def __str__(self):
        return self.name
