from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('libraryapp.views',
    # Examples:
    # url(r'^$', 'library.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^library/category', 'category'),
    url(r'^library/bookSearch', 'bookSearch'),
    url(r'^library/authorSearch', 'authorSearch'),

)
