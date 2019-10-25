from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from pages.models import Installation


# Serializers define the API representation.
class InstallationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Installation
        fields = ['name', 'number_of_users', 'number_of_terabytes', 'lat_coordinates', 'lon_coordinates', 'url']
        read_only_fields = fields


# ViewSets define the view behavior.
class InstallationViewSet(viewsets.ModelViewSet):
    queryset = Installation.objects.all()
    serializer_class = InstallationSerializer


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'installations', InstallationViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('django.contrib.auth.urls')),
    path('accounts/', include('allauth.urls')),
    path('', include('pages.urls')),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
] + urlpatterns
