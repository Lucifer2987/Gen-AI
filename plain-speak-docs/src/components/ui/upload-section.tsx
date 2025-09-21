import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";

export const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0].name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Try LegalEase Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your legal document and see how our AI can simplify it in seconds.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card shadow-medium border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Upload Your Document</CardTitle>
              <CardDescription>
                Supports PDF, DOCX, and TXT files up to 10MB
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!uploadedFile ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                    dragActive 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">
                    Drop your document here, or click to browse
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Your document will be processed securely and privately
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.docx,.txt"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button className="bg-primary hover:bg-primary/90 cursor-pointer">
                      Select Document
                    </Button>
                  </label>
                </div>
              ) : (
                <div className="text-center p-8">
                  <CheckCircle className="mx-auto h-16 w-16 text-success mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">
                    Document Uploaded Successfully
                  </p>
                  <div className="flex items-center justify-center text-muted-foreground mb-6">
                    <FileText className="h-4 w-4 mr-2" />
                    <span className="text-sm">{uploadedFile}</span>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Analyze Document
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setUploadedFile(null)}
                    >
                      Upload Different Document
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};