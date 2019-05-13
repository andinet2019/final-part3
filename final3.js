<script>
         $(document).ready(function() {
         	$('#nav').onePageNav({
         		filter: ':not(.external)',
         	});
         });
      </script>
      <!--End of one page nav-->
      <!--Photo Zoom Out Effect with jQuery: https://tympanus.net/codrops/2010/03/07/photo-zoom-out-effect-with-jquery/
         The idea is show some images which are zoomed in initially and when hovering over an image it gets zoomed out. >
         <!-- javascript start of gallery-->
      <script type="text/javascript">
         $(function() {
         $('#container img').hover(
         function(){
         var $this = $(this);
         $this.stop().animate({'opacity':'1.0','height':'250px','top':'0px','left':'0px'});
         },
         function(){
         var $this = $(this);
         $this.stop().animate({'opacity':'0.5','height':'500px','top':'-66.5px','left':'-150px'});
         }
         );
         });
         
      </script>
      <!-- end of Gallery Javascript-->
      <!--- start of slide show  JS -->
      <script>
         <!-- JQuery fancy trasitions http://workshop.rs/projects/jqfancytransitions/-->
         $(document).ready( function(){
          
           
             $('#show').jqFancyTransitions({ width: 1350, height: 400,strips: 20,direction: 'fountainAlternate',delay: 10  });
          <!--effect: '', // wave, zipper, curtain-->
         });
         
         	         
      </script>
      <!--End of slide Show-->
     