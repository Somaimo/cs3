# pages/admin.py
from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin
from .models import Installation

# We override the default Installation Model view to set readonly fields (user and deleted flag) and that
# the current user is stored as "user" for the installation.
class InstallationAdmin(admin.ModelAdmin):
    # Defines what fields are read only in the admin panel (only for Installation Model)
    def get_readonly_fields(self, request, obj=None):
        readonly_fields = ['user','deleted',]
        return readonly_fields
    
    # Function override required to save current user on first save.
    def save_model(self, request, obj, form, change):
        if not obj.pk:
            # Only save user during first save
            obj.user = request.user
        super().save_model(request, obj, form, change)
admin.site.register(Installation, InstallationAdmin)