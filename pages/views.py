from django.views.generic import TemplateView
from .api_keys import ApiKeys

class HomePageView(TemplateView):
    template_name = 'pages/home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['maps_key'] = ApiKeys.google_maps_key
        return context



class AboutPageView(TemplateView):
    template_name = 'pages/about.html'