from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'library.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^src/book.html', 'libraryapp.views.example'),
    url(r'^library/category', 'libraryapp.views.category'),
    url(r'^library/bookSearch', 'libraryapp.views.bookSearch'),
    url(r'^library/example', 'libraryapp.views.randomTest'),

)
