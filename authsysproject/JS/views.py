# from django.shortcuts import render, redirect
# from django.contrib.auth.decorators import login_required
# from django.utils.decorators import method_decorator
# from django.contrib.auth import logout as ContribLogout
# from django.views.generic import TemplateView

# # Create your views here.

# @method_decorator(login_required, name='dispatch')
# class ReportingBotView(TemplateView):
#     template_name = 'frontend/index.html'

#     # def get(self, *args, **kwargs):
#     #     user = self.request.user
#     #     group = user.groups.values_list('name', flat=True).first()
#     #     if group == 'institution':
#     #         return redirect('proinst')
#     #     else:
#     #         return super(ConfigureView, self).get(self.request, *args, **kwargs)
    
#     def get_context_data(self, **kwargs):
#         user = self.request.user
#         return {
#             'current_user': {
#                 'username': user.first_name,
#                 'full_name': "{first_name} {last_name}".format(first_name=user.first_name, last_name=user.last_name),
#                 'signature': user.personalinfo.signature.url,
#                 'companylogo': user.personalinfo.companylogo.url,
#                 'designation': user.workexp.designation,
#                 'serviceslist': user.personalinfo.serviceslist,
#             }
#         }

# def index(request, *args, **kwargs):
#     user = request.user
#     group = user.groups.values_list('name', flat=True).first()
#     if group == 'institution':
#         return redirect('proinst')
#     else:
#         return render(request, 'frontend/index.html')


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth import logout as ContribLogout
from django.views.generic import TemplateView
from django.core import serializers

# Create your views here.

@method_decorator(login_required, name='dispatch')
class ReportingBotView(TemplateView):
    template_name = 'frontend/index.html'

    def get_context_data(self, **kwargs):
        user = self.request.user

        # Serialize the serviceslist field
        serialized_serviceslist = serializers.serialize('json', user.personalinfo.serviceslist.all())

        return {
            'current_user': {
                'username': user.first_name,
                'full_name': "{first_name} {last_name}".format(first_name=user.first_name, last_name=user.last_name),
                'signature': user.personalinfo.signature.url,
                'companylogo': user.personalinfo.companylogo.url,
                'designation': user.workexp.designation,
                'serviceslist': serialized_serviceslist,
            }
        }

    
          