from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from . models import FormName, CreateForms

import os
from django.core.management import call_command


@csrf_exempt
def post_views(request):
    if(request.method == "POST"):
        # Migrate Database
        print('1')
        path = os.getcwd()
        migratePath = path+"\\Server\\migrate.bat"
        os.system(migratePath)

        # Setting up paths
        path = os.getcwd()
        modelPath = path+"\\forms\\models.py"
        adminPath = path+"\\forms\\admin.py"
        serializerPath = path+"\\forms\\serializers.py"
        apiPath = path+"\\forms\\api.py"
        urlPath = path+"\\forms\\urls.py"
        migratePath = path+"\\Server\\migrate.bat"

        # Accessing Database
        title = FormName.objects.all().order_by('-created_at')[0].title
        print(title)

        # Writing Models.py
        f = open(modelPath, 'a')
        f.write("\n\nclass "+title+"(models.Model):\n")
        f.close()
        data = CreateForms.objects.all()
        for i in data:
            question = str(i.question)
            question = question.replace(" ", "_")
            print(question)
            modelFunc(modelPath, question, i.inputType)

        # Writing Admin.py
        f = open(adminPath, 'a')
        f.write("\nadmin.site.register("+title+")\n")
        f.close()

        # Writing Serializers.py
        f = open(serializerPath, 'a')
        f.write("\n\nclass "+title+"Serializer(serializers.ModelSerializer):\n")
        f.write("    class Meta:\n")
        f.write("        model = "+title+"\n")
        f.write("        fields = '__all__'\n")
        f.close()

        # Writing Api.py
        f = open(apiPath, 'a')
        f.write("\n\nclass "+title+"ViewSet(viewsets.ModelViewSet):\n")
        f.write("    queryset = "+title+".objects.all()\n")
        f.write("    permission_class = [permissions.AllowAny]\n")
        f.write("    serializer_class = "+title+"Serializer\n")
        f.close()

        # Writing Urls.py
        f = open(urlPath, 'a')
        f.write("\n\nrouter.register('"+title +
                "', "+title+"ViewSet, '"+title+"')\n")
        f.write("urlpatterns = router.urls\n")
        f.close()
        print('1')
        # Calling Migrations to database
        os.system(migratePath)


def modelFunc(modelPath, question, inputType):
    f = open(modelPath, 'a')
    if(inputType == "Short Answer"):
        f.write("    "+question+" = models.CharField(max_length=100)\n")
    elif(inputType == "Paragraph"):
        f.write("    "+question+" = models.TextField()\n")
    elif(inputType == "Date"):
        f.write("    "+question+" = models.DateField()\n")
    else:
        pass
    f.close()
