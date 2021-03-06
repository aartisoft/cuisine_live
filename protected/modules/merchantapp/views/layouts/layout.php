<?php $this->renderPartial('/layouts/header');?>

<body>

<a class="pad5 block" href="<?php echo websiteUrl()."/admin"?>"><i class="fa fa-long-arrow-left"></i> <?php echo t("Back")?></a>

<div class="container" id="main-wrapper">
  <div class="panel panel-default">
     <div class="panel-heading"><?php echo merchantApp::moduleName() ?></div>     
     <?php $this->renderPartial('/layouts/menu');?>
  
     <div class="pad10">
     <?php echo $content?>  
     </div>
    
   </div> <!--panel-->
</div> <!--container-->
</body>

<?php $this->renderPartial('/layouts/footer');?>